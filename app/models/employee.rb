class Employee < ApplicationRecord
    belongs_to :admin
    validates_presence_of :empname
    validates_presence_of :phone
    validates_presence_of :jobdes
    validates :empname, :length => { :in => 6..30}
end
