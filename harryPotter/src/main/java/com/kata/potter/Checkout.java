package com.kata.potter;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.stream.Collectors;

public class Checkout {
  private static final int BOOK_PRICE = 8;

  public double calculateTotal(List<Book> bookList) {
    int maxBookSetSize = calculateNoOfUniqueBooks(bookList);
    List<Double> prices = new ArrayList<>();
    for (int setSize = 1; setSize <= maxBookSetSize; setSize++) {
      List<Set<Integer>> listOfBookSets = createSets(bookList, setSize);

      double totalPrice = listOfBookSets.stream()
          .mapToDouble(bookSet -> BOOK_PRICE * calculatedDiscount(bookSet.size()) * bookSet.size())
          .sum();
      prices.add(totalPrice);
    }

    return prices.stream().mapToDouble(price -> price).min().orElse(0);
  }

  private double calculatedDiscount(int uniqueNoOfBooks) {
    double discount = 1;

    if(uniqueNoOfBooks==2) {
      discount = 0.95;
    }
    if(uniqueNoOfBooks==3) {
      discount = 0.9;
    }
    if(uniqueNoOfBooks==4) {
      discount = 0.8;
    }
    if(uniqueNoOfBooks==5) {
      discount = 0.75;
    }
    return discount;
  }

  private Map<Integer, Long> countBooks(List<Book> books) {
    return books.stream()
        .collect(Collectors.groupingBy(book -> book.getNumberInSeries(), Collectors.counting()));
  }

  private List<Set<Integer>> createSets(List<Book> bookList, int maxSize) {
    List<Set<Integer>> listOfSets = new ArrayList<>();
    Map<Integer, Long> countedBooks = countBooks(bookList);

    while (areAnyBooksLeft(countedBooks)) {
      List<Integer> remainingBooks = new ArrayList<>();
      countedBooks.forEach((bookVolume, amountOfBooks) -> {
        for (int i = 0; i < amountOfBooks; i++) {
          remainingBooks.add(bookVolume);
        }
      });

      Set<Integer> firstSet = remainingBooks.stream().distinct().limit(maxSize).collect(Collectors.toSet());
      listOfSets.add(firstSet);
      firstSet.forEach(bookVolume -> countedBooks.put(bookVolume, countedBooks.get(bookVolume)-1));
    }

    return listOfSets;
  }

  private boolean areAnyBooksLeft(Map<Integer, Long> countedBooks) {
    return countedBooks.values().stream().mapToLong(volume -> volume).sum() > 0;
  }

  private int calculateNoOfUniqueBooks(List<Book> bookList) {
    return (int) bookList.stream().distinct().count();
  }
}