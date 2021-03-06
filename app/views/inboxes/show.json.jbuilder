json.array! @inbox do |metadata|
  json.(metadata, :user_email, :message_id, :read, :draft, :starred, :created_at, :updated_at, :id)
  json.(metadata.message, :sender_email, :to_emails, :subject, :body, :updated_at, :created_at)
end
