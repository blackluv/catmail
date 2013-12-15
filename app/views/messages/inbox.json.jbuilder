json.array! @inbox do |metadata|
  json.partial! 'messages/message', message: metadata.message, metadata: metadata
end
