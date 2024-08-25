import { render, screen } from "@testing-library/react";
import { describe, it, expect, afterAll, afterEach, beforeAll } from "vitest";
import "@testing-library/jest-dom";
import { http, HttpResponse } from "msw";
import { setupServer } from "msw/node";
import VendorList from "./VendorList";
import { IVendor } from "./IVendor";
import { url } from "./VendorAPI";

const server = setupServer(
  http.get(url, () => {
    return HttpResponse.json([
      { id: 1, code: "AC", name: "Acme", state: "OH" } as IVendor,
    ]);
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("VendorList", () => {
  it("first vendor", async () => {
    render(<VendorList />);
    // let card = await screen.findByText("Veum - Bayer");
    // expect(card).toBeDefined();
    let cards = await screen.findAllByRole("listitem");
    expect(cards.length).toEqual(1);
   expect(cards[0]).toHaveTextContent("Acme")
    
  });

  // test('handles server error', async () => {
  //   server.use(
  //     // override the initial "GET /greeting" request handler
  //     // to return a 500 Server Error
  //     http.get('/greeting', (req, res, ctx) => {
  //       return new HttpResponse(null, {status: 500})
  //     }),
  //   )

  // })
});
