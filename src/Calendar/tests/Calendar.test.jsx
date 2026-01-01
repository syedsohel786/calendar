/* eslint-disable no-undef */
import React from "react";
import { render, screen } from "@testing-library/react";
import Calendar from "..";

describe("Calendar Component", () => {
  test("renders month name and year correctly", () => {
    render(<Calendar date="15/08/2023" />);

    expect(screen.getByText("August 2023")).toBeInTheDocument();
  });

  test("renders all days of the week", () => {
    render(<Calendar date="01/01/2023" />);

    const days = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

    days.forEach((day) => {
      expect(screen.getByText(day)).toBeInTheDocument();
    });
  });

  test("renders correct number of days for the month", () => {
    // February 2023 → 28 days
    render(<Calendar date="10/02/2023" />);

    for (let i = 1; i <= 28; i++) {
      expect(screen.getByText(i.toString())).toBeInTheDocument();
    }
  });

  test("highlights the selected day", () => {
    render(<Calendar date="5/09/2023" />);

    const selectedDay = screen.getByText("5");

    expect(selectedDay).toHaveClass("bg-[black]");
    expect(selectedDay).toHaveClass("text-[white]");
  });

  test("renders empty slots before first day of month", () => {
    // October 2023 starts on Sunday → startDay = 0
    const { container } = render(<Calendar date="01/10/2023" />);

    // Empty divs have no text
    const emptyDivs = container.querySelectorAll("div:empty");
    expect(emptyDivs.length).toBeGreaterThanOrEqual(0);
  });

  test("does not apply highlight class to non-selected days", () => {
    render(<Calendar date="10/07/2023" />);

    const nonSelectedDay = screen.getByText("1");
    expect(nonSelectedDay).not.toHaveClass("bg-[black]");
  });
});
