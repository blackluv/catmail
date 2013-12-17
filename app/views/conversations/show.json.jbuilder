json.array! @conversation do |metadata|
  json.partial! 'messages/message', message: metadata.message, metadata: metadata
end
