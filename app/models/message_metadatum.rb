class MessageMetadatum < ActiveRecord::Base
  attr_accessible :user_email, :message_id, :read, :draft, :starred

  validates :user_email,
            :message_id,
            :read,
            :draft,
            :starred,
            presence: true

  validates :user_email,
            uniqueness: { scope: :message_id }
end
