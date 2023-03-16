class Guest < ApplicationRecord
    has_one :employee
    belongs_to :admin
end
