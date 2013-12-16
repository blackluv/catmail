class AddConversationIdToMessages < ActiveRecord::Migration
  def change
    add_column :messages, :conversation_id, :integer
    Message.connection.execute(<<-SQL)
    UPDATE
      messages
    SET
      conversation_id = id
    SQL
    change_column :messages, :conversation_id, :integer, null: false
    add_index :messages, :conversation_id
  end
end
