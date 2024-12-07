import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import DataTable from "../Components/DataTable";
import { Provider } from "react-redux";
import { store } from "../store/store";

window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: function () {},
      removeListener: function () {},
    };
  };

afterEach(() => {
  jest.restoreAllMocks();
  jest.clearAllMocks();
});

describe("DataTable Component", () => {
  test("should render the DataTable with the correct columns", async () => {
    render(
      <Provider store={store}>
        <DataTable />
      </Provider>
    );

    // Check if the columns are rendered correctly
    expect(screen.getByText(/First Name/i)).toBeInTheDocument();
    expect(screen.getByText(/Last Name/i)).toBeInTheDocument();
    expect(screen.getByText(/Email/i)).toBeInTheDocument();
    expect(screen.getByText(/Phone/i)).toBeInTheDocument();
    expect(screen.getByText(/Company Name/i)).toBeInTheDocument();
  });

  test("should render the search input and allow typing", async () => {
    render(
      <Provider store={store}>
        <DataTable />
      </Provider>
    );

    const searchInput = screen.getByPlaceholderText(/Search by any field/i);
    expect(searchInput).toBeInTheDocument();

    fireEvent.change(searchInput, { target: { value: "John" } });
    expect(searchInput).toHaveValue("John");
  });

  test("should display 'No users found' when dataSource is empty", async () => {
    render(
      <Provider store={store}>
        <DataTable />
      </Provider>
    );

    React.act(() => {
      store.dispatch({
        type: "users/setUsers",
        payload: [],
      });
    });

    const emptyText = await screen.findByText(/No users found/i);
    expect(emptyText).toBeInTheDocument();
  });

  test("should apply correct styles to columns", async () => {
    render(
      <Provider store={store}>
        <DataTable />
      </Provider>
    );

    const firstColumnHeader = screen.getByText(/First Name/i).closest("th");
    expect(firstColumnHeader).toHaveStyle("padding: 8px");
  });
});
