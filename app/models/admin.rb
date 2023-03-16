class Admin < ApplicationRecord
    #username validation
    validates_presence_of :username
    validates_uniqueness_of :username, :case_sensitive => false
    validates :username, :length => { :in => 6..30}
    #password validations
    
    validates :password, :length => { :minimum => 6 }
    has_secure_password
    has_many :employees
    has_many :guests
end
