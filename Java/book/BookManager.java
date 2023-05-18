import java.util.*;
// BookManager class

public class BookManager implements BookList {
    private List<Book> bookList;

    public BookManager() {
        bookList = new ArrayList<Book>();

    }

    public void addBook(Book book) {
        bookList.add(book);
    }

    public void viewBook(String isbn) {
        // find book in bookList by isbn and display information
        
    }

    public void deleteBook(String isbn) {
        // remove book from bookList by isbn
        System.out.println(bookList);
    }

    public List<Book> searchByTitle(String title) {
        // find all books in bookList that match title and return as a List
        List<Book> matchingBooks = new ArrayList<>();
        for (Book book : bookList) {
            if (book.getTitle().equalsIgnoreCase(title)) {
                matchingBooks.add(book);
            }
        }
        System.out.println(matchingBooks +"\n stuff");
        return matchingBooks;
    }

    public List<Book> searchByAuthor(String author) {
        // find all books in bookList that match author and return as a List
        List<Book> matchingBooks = new ArrayList<>();
        for (Book book : bookList) {
            if (book.getTitle().equalsIgnoreCase(author)) {
                matchingBooks.add(book);
            }
        }
        return matchingBooks;
    }
    

    public List<Book> getAllBooks() {
        return bookList;
    }

    // implement methods from BookList interface
    // e.g. addBook(), viewBook(), deleteBook(), searchByTitle(), searchByAuthor(), getAllBooks()
}