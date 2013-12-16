class FixConversationId < ActiveRecord::Migration
  def change
    change_column :messages, :conversation_id, :string, null: false
  end
end
