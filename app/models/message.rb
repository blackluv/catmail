class Message < ActiveRecord::Base
  attr_accessible :sender_email, :to_emails, :subject, :body

  validates :sender_email, presence: true

  has_many :metadata,
           class_name: "MessageMetadatum",
           inverse_of: :message

  has_many :users, through: :metadata

  def self.author(params)
    message = Message.new(params)
    message.metadata.build(user_email: message.sender_email)

    to_emails = message.to_emails.split(',')
    to_emails.each do |to_email|
      message.metadata.build(user_email: to_email)
    end

    message
  end
end
