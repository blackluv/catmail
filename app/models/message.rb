class Message < ActiveRecord::Base
  attr_accessible :sender_email, :to_emails, :subject, :body

  before_validation :ensure_conversation_id

  validates :sender_email, :conversation_id, presence: true
  #TODO Validate to_emails presence if message not a draft.
  #TODO Also move draft attribute onto Message.

  has_many :metadata,
           class_name: "MessageMetadatum",
           inverse_of: :message

  has_many :users, through: :metadata

  #TODO maybe author shouldn't send message immediately.

  def self.generate_conversation_id
    #TODO Doesn't really ensure unique conversation id because of race condition.
    conversation_id = SecureRandom.urlsafe_base64(20)
    while Message.exists?(conversation_id: conversation_id)
      conversation_id = SecureRandom.urlsafe_base64(20)
    end
    conversation_id
  end

  def ensure_conversation_id
    self.conversation_id ||= Message.generate_conversation_id
  end

  def self.author(params)
    message = Message.new(params)
    message.metadata.build(user_email: message.sender_email)

    message.to_emails_arr.each do |to_email|
      message.metadata.build(user_email: to_email)
    end

    message
  end

  def find_metadata_by_user_email(email)
    metadata.find_by_user_email(email)
  end

  def to_emails_arr
    to_emails.split(',')
  end
end
