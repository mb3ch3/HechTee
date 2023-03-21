class Guest < ApplicationRecord
    belongs_to :admin
    belongs_to :employee
end
