class User < ActiveRecord::Base
  before_validation :ensure_session_token

  validates :provider, :uid, :session_token, presence: true

  has_many :message_metadata,
           foreign_key: :user_email,
           primary_key: :email

  has_many :messages,
           through: :message_metadata

  def self.generate_session_token
    SecureRandom::urlsafe_base64(20)
  end

  def self.find_or_create_by_omniauth(auth)
    provider = auth['provider']
    uid = auth['uid'].to_i

    user = find_by_provider_and_uid(provider, uid)
    user ||= User.new

    user.provider = provider
    user.uid = uid
    user.name = auth['info']['name']
    user.email = auth['info']['email']
    user.username = auth['extra']['raw_info']['login']
    user.gravatar = auth['extra']['raw_info']['gravatar_id']

    user.session_token = User.generate_session_token
    user.save!

    user
  end

  def self.create_guest
    user = User.new
    user.provider = 'guest'
    user.uid = Random.rand(1_000_000)
    user.name = 'Christopher'
    user.email = 'CGuest' + user.uid.to_s + '@example.com'
    user.username = 'CGuest' + user.uid.to_s

    user.session_token = User.generate_session_token
    user.save!
    user
  end

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end

  def inbox
    # This query gets the MessageMetadatum for the newest message
    # for each each conversation_id. Messages where the current
    # user is the sender or not a recipient of a message_metadatum
    # are filtered out.
    MessageMetadatum.find_by_sql([<<-SQL, email, email])
      SELECT
        t4.*
      FROM
        messages AS t1
      JOIN
        message_metadata AS t4
      ON
        (t1.id = t4.message_id)
      JOIN (
        SELECT
          max(t3.id) id
        FROM
          messages AS t3
        GROUP BY
          t3.conversation_id
        ) AS t2
      ON
        t1.id = t2.id
      WHERE
        t4.user_email = ? AND t1.sender_email != ?
    SQL
  end

  def conversation(id)
    message_metadata
      .joins(:message)
      .where('messages.conversation_id = ?', id)
      .includes(:message)
  end
end
