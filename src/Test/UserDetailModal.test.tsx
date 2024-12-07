import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import UserDetailModal from "../Components/UserDetailModal";

const mockOnClose = jest.fn();

const mockModalData = {
    key: 33,
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    phone: "123-456-7890",
    companyName: "Acme Corp",
    companyAddress: "123 Business Rd",
    departmentName: "Engineering",
    jobTitle: "Software Engineer",
};

afterEach(() => {
    jest.restoreAllMocks();
    jest.clearAllMocks();
  });

beforeAll(() => {
    window.matchMedia = jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
    }));
});


describe("UserDetailModal Component", () => {
    it("does not render modal content when `open` is false", () => {
        render(
            <UserDetailModal
                open={false}
                onClose={mockOnClose}
                modalData={mockModalData}
            />
        );

        expect(screen.queryByText("User Details")).not.toBeInTheDocument();
    });
    it("renders the modal with user details correctly when open", () => {
        render(
            <UserDetailModal
                open={true}
                onClose={mockOnClose}
                modalData={mockModalData}
            />
        );

        expect(screen.getByText("User Details")).toBeInTheDocument();
        expect(screen.getByText("First Name")).toBeInTheDocument();
        expect(screen.getByText("John")).toBeInTheDocument();
        expect(screen.getByText("Last Name")).toBeInTheDocument();
        expect(screen.getByText("Doe")).toBeInTheDocument();
        expect(screen.getByText("Email")).toBeInTheDocument();
        expect(screen.getByText("john.doe@example.com")).toBeInTheDocument();
        expect(screen.getByText("Phone")).toBeInTheDocument();
        expect(screen.getByText("123-456-7890")).toBeInTheDocument();
        expect(screen.getByText("Company Name")).toBeInTheDocument();
        expect(screen.getByText("Acme Corp")).toBeInTheDocument();
        expect(screen.getByText("Company Address")).toBeInTheDocument();
        expect(screen.getByText("123 Business Rd")).toBeInTheDocument();
        expect(screen.getByText("Department")).toBeInTheDocument();
        expect(screen.getByText("Engineering")).toBeInTheDocument();
        expect(screen.getByText("Company Title")).toBeInTheDocument();
        expect(screen.getByText("Software Engineer")).toBeInTheDocument();
    });



    it("calls `onClose` when the modal's close button is clicked", () => {
        render(
            <UserDetailModal
                open={true}
                onClose={mockOnClose}
                modalData={mockModalData}
            />
        );

        const closeButton = screen.getByRole("button", { name: /close/i });
        fireEvent.click(closeButton);

        expect(mockOnClose).toHaveBeenCalledTimes(1);
        expect(mockOnClose).toHaveBeenCalledWith(false);
    });
});
