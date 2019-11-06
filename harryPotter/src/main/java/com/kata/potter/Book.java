package com.kata.potter;

import java.util.Objects;

public class Book {

  private int numberInSeries;

  public Book() {
  }

  public Book(int numberInSeries) {
    this.numberInSeries = numberInSeries;
  }

  public int getNumberInSeries() {
    return numberInSeries;
  }

  @Override
  public boolean equals(Object o) {
    if (this == o) return true;
    if (o == null || getClass() != o.getClass()) return false;
    Book book = (Book) o;
    return numberInSeries == book.numberInSeries;
  }

  @Override
  public int hashCode() {
    return Objects.hash(numberInSeries);
  }
}
