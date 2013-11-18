class MessageMetadatum < ActiveRecord::Base
  attr_accessible :user_email, :message_id, :read, :draft, :starred

  validates :user_email,
            :message,
            presence: true

  validates :user_email,
            uniqueness: { scope: :message_id }

  belongs_to :message
  belongs_to :user,
             foreign_key: :user_email,
             primary_key: :email
end
