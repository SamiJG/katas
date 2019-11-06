package com.kata.potter;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import org.junit.Test;

public class PotterTest {

  @Test
  public void whenEmptyCheckout_ThenTotalIs0 () {

    Checkout checkout = new Checkout();
    List<Book> bookList = Arrays.asList();

    assert(checkout.calculateTotal(bookList)==0);
  }

  @Test
  public void whenOneBook_ThenTotalIs8 () {

    Checkout checkout = new Checkout();
    Book book = new Book();
    List<Book> bookList = Arrays.asList(book);

    assert(checkout.calculateTotal(bookList)==8);
  }

  @Test
  public void whenTwoOfTheSameBooks_ThenTotalIs16 () {

    Checkout checkout = new Checkout();
    Book book = new Book();
    Book book2 = new Book();
    List<Book> bookList = Arrays.asList(book, book2);

    assert(checkout.calculateTotal(bookList)==16);
  }

  @Test
  public void whenTwoDifferentBooks_ThenDiscountIs5Percent () {

    Checkout checkout = new Checkout();
    Book book = new Book(1);
    Book book2 = new Book(2);
    List<Book> bookList = Arrays.asList(book, book2);

    assert(checkout.calculateTotal(bookList)==15.20);
  }

  @Test
  public void whenThreeDifferentBooks_ThenDiscountIs10Percent () {

    Checkout checkout = new Checkout();
    Book book = new Book(1);
    Book book2 = new Book(2);
    Book book3 = new Book(3);
    List<Book> bookList = Arrays.asList(book, book2, book3);

    assert(checkout.calculateTotal(bookList)==21.60);
  }

  @Test
  public void whenFourDifferentBooks_ThenDiscountIs20Percent () {

    Checkout checkout = new Checkout();
    Book book = new Book(1);
    Book book2 = new Book(2);
    Book book3 = new Book(3);
    Book book4 = new Book(4);

    List<Book> bookList = Arrays.asList(book, book2, book3, book4);

    assert(checkout.calculateTotal(bookList)==25.60);
  }

  @Test
  public void whenFiveDifferentBooks_ThenDiscountIs25Percent () {

    Checkout checkout = new Checkout();
    Book book = new Book(1);
    Book book2 = new Book(2);
    Book book3 = new Book(3);
    Book book4 = new Book(4);
    Book book5 = new Book(5);

    List<Book> bookList = Arrays.asList(book, book2, book3, book4, book5);

    assert(checkout.calculateTotal(bookList)==30);
  }

  @Test
  public void whenTwoBook1AndOneBook2_ThenDiscountIs5PercentFor2BooksNoDiscountOnDuplicatedBook () {

    Checkout checkout = new Checkout();
    Book book = new Book(1);
    Book book2 = new Book(2);
    Book book3 = new Book(2);
    List<Book> bookList = Arrays.asList(book, book2, book3);

    double totalCost = checkout.calculateTotal(bookList);

    assert(totalCost==23.20);
  }

  @Test
  public void whenTwoBook1AndTwoBook2And1Book3_ThenDiscountIs5PercentFor2BooksAnd10PercentOn3Books () {

    Checkout checkout = new Checkout();
    Book book = new Book(1);
    Book book2 = new Book(2);
    Book book3 = new Book(3);
    Book book11 = new Book(1);
    Book book12 = new Book(2);
    List<Book> bookList = Arrays.asList(book, book2, book3, book11, book12);

    double totalCost = checkout.calculateTotal(bookList);

    assert(totalCost==36.8);
  }

  @Test
  public void whenTheTestFromTheKata_ThenDiscountAppliedIsCorrect () {

    Checkout checkout = new Checkout();
    Book book = new Book(1);
    Book book2 = new Book(2);
    Book book3 = new Book(3);
    Book book4 = new Book(4);
    Book book5 = new Book(5);
    Book book6 = new Book(1);
    Book book7 = new Book(2);
    Book book8 = new Book(3);
    List<Book> bookList = Arrays.asList(book, book2, book3, book4, book5, book6, book7, book8);

    double totalCost = checkout.calculateTotal(bookList);

    assert(totalCost==51.2);
  }
}
