json.(@message, :sender_email, :to_emails, :subject, :body, :updated_at, :created_at)
json.metadata do |json|
  metadata = @message.metadata.where(:user_email => current_user.email).first
  json.partial! 'messages/metadata', metadata: metadata
end
