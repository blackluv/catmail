class CreateMessagesAndMessageMetadata < ActiveRecord::Migration
  def change
    create_table :messages do |t|
      t.string :sender_email, null: false
      t.string :to_emails
      t.text :subject
      t.text :body

      t.timestamps
    end

    create_table :message_metadata do |t|
      t.string :user_email, null: false
      t.integer :message_id, null: false
      t.boolean :read, null: false, default: false
      t.boolean :draft, null: false, default: false
      t.boolean :starred, null: false, default: false

      t.timestamps
    end

    add_index :messages, :sender_email
    add_index :message_metadata, :user_email
    add_index :message_metadata, :message_id
    add_index :message_metadata, [:user_email, :message_id], unique: true
  end
end
