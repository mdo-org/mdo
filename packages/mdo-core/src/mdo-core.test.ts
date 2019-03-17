import MDo from "./index";

describe("MDo", () => {
  describe("#transform", () => {
    it("returns a transform stream", () => {
      const stream = MDo.transform();
      expect(stream.readable).toEqual(true);
      expect(stream.writable).toEqual(true);
    });
  });
});
