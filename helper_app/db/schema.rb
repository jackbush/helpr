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
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20150301013901) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "bids", force: :cascade do |t|
    t.integer  "job_id"
    t.integer  "applicant_id"
    t.datetime "jobdatetime"
    t.string   "note"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
  end

  create_table "jobs", force: :cascade do |t|
    t.string   "title"
    t.string   "description"
    t.string   "postcode"
    t.string   "instructions"
    t.integer  "poster_id"
    t.integer  "helper_id"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "username"
    t.string   "gender"
    t.string   "postcode"
    t.string   "avatar"
    t.text     "about"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string   "role"
  end

  create_table "welcomes", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end