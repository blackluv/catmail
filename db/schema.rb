# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended to check this file into your version control system.

ActiveRecord::Schema.define(:version => 20131216024750) do

  create_table "message_metadata", :force => true do |t|
    t.string   "user_email",                    :null => false
    t.integer  "message_id",                    :null => false
    t.boolean  "read",       :default => false, :null => false
    t.boolean  "draft",      :default => false, :null => false
    t.boolean  "starred",    :default => false, :null => false
    t.datetime "created_at",                    :null => false
    t.datetime "updated_at",                    :null => false
  end

  add_index "message_metadata", ["message_id"], :name => "index_message_metadata_on_message_id"
  add_index "message_metadata", ["user_email", "message_id"], :name => "index_message_metadata_on_user_email_and_message_id", :unique => true
  add_index "message_metadata", ["user_email"], :name => "index_message_metadata_on_user_email"

  create_table "messages", :force => true do |t|
    t.string   "sender_email",    :null => false
    t.string   "to_emails"
    t.text     "subject"
    t.text     "body"
    t.datetime "created_at",      :null => false
    t.datetime "updated_at",      :null => false
    t.string   "conversation_id", :null => false
  end

  add_index "messages", ["conversation_id"], :name => "index_messages_on_conversation_id"
  add_index "messages", ["sender_email"], :name => "index_messages_on_sender_email"

  create_table "users", :force => true do |t|
    t.string   "provider",      :null => false
    t.integer  "uid",           :null => false
    t.string   "name"
    t.string   "email"
    t.string   "username"
    t.string   "gravatar"
    t.string   "session_token", :null => false
    t.datetime "created_at",    :null => false
    t.datetime "updated_at",    :null => false
  end

  add_index "users", ["provider", "uid"], :name => "index_users_on_provider_and_uid", :unique => true
  add_index "users", ["session_token"], :name => "index_users_on_session_token", :unique => true

end
