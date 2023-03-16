class CreateGuests < ActiveRecord::Migration[6.1]
  def change
    create_table :guests do |t|
      t.string :gstname
      t.string :room
      t.integer :employee_id
      t.timestamps
    end
  end
end
