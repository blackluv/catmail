class Message < ActiveRecord::Base
  attr_accessible :sender_email, :to_emails, :subject, :body

  validates :sender_email, presence: true
end
