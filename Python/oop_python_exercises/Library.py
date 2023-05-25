"""create a Python class called "Library" that represents a library.
 The class should have attributes for the library's name and a list of books.
 Implement methods to add a book, remove a book, and display the list of books available in the library.
 """

class Library:
    def __init__(self, library_name, book_list):
       self.library_name = library_name
       self.book_list = book_list


    def add_book(self, book):
        if book in self.book_list:
            self.book_list[book]+=1
        else:
            self.book_list[book] = 1
        return "added to the dictionary of books: ", self.book_list
    
    def remove_book(self, book):
        if book in self.book_list:
            if self.book_list[book] == 1:
                del(self.book_list[book])
            else:
                self.book_list[book]-=1
        return "removed from the dictionary of books: ", self.book_list
    
    def display_books(self):
        return "this is the current state of our book shelves: ",self.book_list
    

    
philly_libarary = Library("City of Philadelphia", {"hobbits":1, "elements":2})

print(philly_libarary.add_book("fire"))
print(philly_libarary.add_book("fire"))
print(philly_libarary.remove_book("hobbits"))
print(philly_libarary.display_books())

