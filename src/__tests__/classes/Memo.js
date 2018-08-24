import Memo from '../../classes/Memo';


describe('Test for Memo class', () => {


  describe('lastmodified', () => {
    let memo;
    beforeEach(() => {
      memo = new Memo();

    });

    test('リスト用で時間表示', () => {
      const d = new Date();
      d.setHours(1);
      d.setMinutes(2);
      memo.data.lastModified = d.getTime();
      expect(memo.lastModifiedForList).toBe("01:02");
    });


    test('リスト用で24時間より後の場合', () => {
      const d = new Date();
      memo.data.lastModified = d.getTime() - 24 * 3600 * 1000;
      expect(memo.lastModifiedForList).toMatch(/\d{4}\/\d{1,2}\/\d{1,2}/);
    });

    test('入力エリアの上部の日付', () => {
      expect(memo.lastModifiedForText).toMatch(/\d{4}年\d{1,2}月\d{1,2}日/);
    });

  });

});