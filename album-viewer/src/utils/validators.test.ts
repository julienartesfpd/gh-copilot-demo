import { describe, expect, it } from "vitest";
import { validateDate, validateIPV6 } from "./validators";

// test the validateDate function
describe("validateDate", () => {
  it("should return a Date object for a valid date string", () => {
    const dateString = "25/12/2020";
    const result = validateDate(dateString);
    expect(result).toBeInstanceOf(Date);
    expect(result?.getDate()).toBe(25);
    expect(result?.getMonth()).toBe(11); // Months are zero-based
    expect(result?.getFullYear()).toBe(2020);
  });

  it("should return null for an invalid date string", () => {
    const dateString = "31/02/2020"; // Invalid date
    const result = validateDate(dateString);
    expect(result).toBeNull();
  });

  it("should return null for an incorrectly formatted date string", () => {
    const dateString = "2020-12-25"; // Incorrect format
    const result = validateDate(dateString);
    expect(result).toBeNull();
  });
});

//  test the validateIPV6 function
describe("validateIPV6", () => {
  it("should return true for a valid IPv6 address", () => {
    const ipv6String = "2001:0db8:85a3:0000:0000:8a2e:0370:7334";
    const result = validateIPV6(ipv6String);
    expect(result).toBe(true);
  });

  it("should return false for an invalid IPv6 address", () => {
    const ipv6String = "2001:0db8:85a3:0000:0000:8a2e:0370"; // Missing one segment
    const result = validateIPV6(ipv6String);
    expect(result).toBe(false);
  });

  it("should return false for a non-IPv6 string", () => {
    const ipv6String = "not an ipv6 address";
    const result = validateIPV6(ipv6String);
    expect(result).toBe(false);
  });
});     