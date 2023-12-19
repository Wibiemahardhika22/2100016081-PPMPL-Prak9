// NOTE - Tulis kode pengujian disini
// Path: test.index.js
// ! Dont change this code
const { capitalize, filterOddNumber, epochDateToUTC } = require("./index");
const { expect, describe, test } = require("@jest/globals");

// @ Capitalize
// ! Write Minimum 4 different test case, with different matcher for capitalize
/**
 * Example input param = "hello"
 * Expected output = "Hello"
 */
describe("Capitalize", () => {
  // 1
  test("should return uppercased Hello", () => {
    // Write ur test-code here!
    const result = capitalize("hello");
    expect(result).toEqual("Hello");
    expect(result).toMatch(/^H/); // Memastikan string diawali dengan 'H'
    expect(result).toHaveLength(5); // Memastikan panjang string 5 karakter
    expect(result).not.toMatch(/hello/); // Memastikan tidak ada kata 'hello' di dalam string
  });

  // write another 3 test case here!
  // 2
  test("mengatasi string kosong", () => {
    const result = capitalize("");
    expect(result).toEqual("");
    expect(result).toHaveLength(0); // Memastikan panjang string kosong
    expect(result).toBe(""); // Memastikan string benar-benar kosong
  });

  // 3
  test("mengkapitalisasi satu karakter", () => {
    const result = capitalize("a");
    expect(result).toMatch(/^[A-Z]$/); // Memastikan hanya satu huruf kapital
    expect(result).not.toEqual("a"); // Memastikan karakter telah diubah
  });

  // 4
  test("tidak mengubah kata yang sudah berawalan huruf kapital", () => {
    const result = capitalize("World");
    expect(result).toMatch("World"); // Memastikan kata tetap sama
    expect(result).toEqual("World"); // Memastikan sama persis dengan input
    expect(result).toHaveLength(5); // Memastikan panjang string 5 karakter
  });

});

// @ FilterOddNumber
// ! Try to check the filterOddNumber function, and repair the function
describe("FilterOddNumber", () => {
  it("should return [2,4]", () => {
    expect(filterOddNumber([1, 2, 3, 4, 5])).toEqual([2, 4]);
  });

  it("should return []", () => {
    expect(filterOddNumber([1, 3, 5, 7, 9])).toEqual([]);
  });


  test("harus mengembalikan array kosong untuk input array yang kosong", () => {
    const result = filterOddNumber([]);
    expect(result).toEqual([]); // Memastikan hasil berupa array kosong
    expect(result).toHaveLength(0); // Memastikan panjang hasil adalah 0
  });

  test("harus mengembalikan array yang sama untuk array yang hanya berisi angka genap", () => {
    const result = filterOddNumber([2, 4, 6, 8]);
    expect(result).toEqual([2, 4, 6, 8]); // Memastikan hasil sama dengan input array
    expect(result).toHaveLength(4); // Memastikan panjang hasil adalah 4
    expect(result).toContain(2); // Memastikan hasil mengandung angka 2
    expect(result).toContain(4); // Memastikan hasil mengandung angka 4
    expect(result).toContain(6); // Memastikan hasil mengandung angka 6
    expect(result).toContain(8); // Memastikan hasil mengandung angka 8
  });

  test("harus mengembalikan [0] untuk array yang hanya berisi angka 0", () => {
    const result = filterOddNumber([0]);
    expect(result).toEqual([0]); // Memastikan hasil adalah array dengan angka 0
    expect(result).toHaveLength(1); // Memastikan panjang hasil adalah 1
  });

  test("harus mengembalikan array yang berisi angka genap negatif saja", () => {
    const result = filterOddNumber([-2, -4, -5, -6, -8, -9]);
    expect(result).toEqual([-2, -4, -6, -8]); // Memastikan hasil sama dengan input karena semuanya adalah angka genap negatif
    expect(result).toHaveLength(4); // Memastikan panjang hasil sama dengan panjang input
  });
});

// @ EpochDateToUTC
// ! Write Minimum 4 different test case for epochDateToUTC
/**
 * Example input param = 0
 * Expected output = Thu, 01 Jan 1970 00:00:00 GMT
 */
describe("EpochDateToUTC", () => {
  it("should return Thu, 01 Jan 1970 00:00:00 GMT", () => {
    // Write ur test-code here!
    const result = epochDateToUTC(0);
    expect(result).toMatch("Thu, 01 Jan 1970 00:00:00 GMT"); // Memastikan hasil sesuai dengan string yang diharapkan
    expect(result).toBeDefined(); // Memastikan hasil tidak undefined
    expect(result).not.toBeFalsy(); // Memastikan hasil tidak falsy
    expect(result).not.toBeNull(); // Memastikan hasil tidak null
    expect(result).not.toBeUndefined(); // Memastikan hasil tidak undefined
  });

  // write another 3 test case here!
  test("mengembalikan 'Fri, 02 Jan 1970 00:00:00 GMT' untuk epoch 86400", () => {
    const result = epochDateToUTC(86400);
    expect(result).toMatch("Fri, 02 Jan 1970 00:00:00 GMT"); // Memastikan hasil sesuai dengan string yang diharapkan
    expect(result).toBeDefined(); // Memastikan hasil tidak undefined
    expect(result).not.toBeFalsy(); // Memastikan hasil tidak falsy
    expect(result).not.toBeNull(); // Memastikan hasil tidak null
    expect(result).not.toBeUndefined(); // Memastikan hasil tidak undefined
  });

  test("mengembalikan format spesifik untuk epoch 1672534979", () => {
    const result = epochDateToUTC(1672534979);
    expect(result).toMatch(/\w{3}, \d{2} \w{3} \d{4} \d{2}:\d{2}:\d{2} GMT/); // Memastikan hasil sesuai dengan format yang diharapkan
    expect(result).toBeDefined(); // Memastikan hasil tidak undefined
    expect(result).not.toBeFalsy(); // Memastikan hasil tidak falsy
    expect(result).not.toBeNull(); // Memastikan hasil tidak null
    expect(result).not.toBeUndefined(); // Memastikan hasil tidak undefined
  });

  test("mengembalikan format spesifik untuk epoch 2365127999", () => {
    const result = epochDateToUTC(2365127999);
    expect(result).toMatch(/\w{3}, \d{2} \w{3} \d{4} \d{2}:\d{2}:\d{2} GMT/); // Memastikan hasil sesuai dengan format yang diharapkan
    expect(result).toBeDefined(); // Memastikan hasil tidak undefined
    expect(result).not.toBeFalsy(); // Memastikan hasil tidak falsy
    expect(result).not.toBeNull(); // Memastikan hasil tidak null
    expect(result).not.toBeUndefined(); // Memastikan hasil tidak undefined
  });
});

