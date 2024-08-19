import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import VendorList from "./VendorList";

describe("VendorList", () => {
  it("first vendor", async () => {
    render(<VendorList />);
    let card = await screen.findByText("Veum - Bayer");
    expect(card).toBeDefined();
  });
});
