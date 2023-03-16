class CreateEmployees < ActiveRecord::Migration[6.1]
  def change
    create_table :employees do |t|
      t.string :empname
      t.string :phone
      t.string :jobdes
      t.integer :admin_id
    end
  end
end
