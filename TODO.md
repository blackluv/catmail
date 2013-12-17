# Phase I: The Apiness
- [x] Route to list inbox 
     * send over message_data with messages
- [x] show a message
- [x] send a message
- [x] MessageMetaData 
     * has_many, one per user who sent or received this message
     * Read bool
     * Draft bool
     * Starred bool

# Phase Ia: Backbone Views
- [x] index view to show all messages in inbox.
- [x] message show view.
- [x] sidebar view to go back to index
- [x] compose view to send message
     - [ ] Autocomplete username from global list of contacts.
- [ ] Reply button

# Conversations
- [x] Conversations are just an id field on message.
- [x] When authoring a new message in backbone, set conversation_id to be nil.
- [x] When authoring a reply in backbone, set conversation_id to be the previous message's conversation_id.
- [ ] When showing a conversation in backbone, fetch rest of conversation by using conversation resource.
- [ ] Add a backbone collection "Conversation" which has message models.
- [ ] Conversation resource should return array of 'messages'.
- [x] When authoring a new message in rails, produce the "next conversation id" which is one more than the greatest id.
- [x] When fetching inbox grab only conversations, by grouping by conversation id and sorting groups by message id.


# Phase II: Day of conversations
* list starred
* list sent
* Sent Mails (i.e. Am I the sender of this?)  (implied from sender)
* Labels (have a label class per user)
    * Inbox
    * Archive
    * Trash
* Inbox of conversations
* Show a conversation as a list of messages
* Fold up the read messages
* Removes archived emails from inbox

# Phase III

## More and more for later

* Little reply box at the very bottom
* When you click it, it becomes editable.
* Starred
* Drafts
* Trash
* Tags
* Attachments