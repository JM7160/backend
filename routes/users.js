const express = require('express');
const router = express.Router();
const db = require('../db');

// 전체 유저 조회 API
router.get('/', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM users');
    res.json(rows);
  } catch (err) {
    res.status(500).send('DB 조회 실패');
  }
});

// 회원가입 API 예시
router.post('/register', async (req, res) => {
  const { nickname, password, birth, profile_image } = req.body;
  try {
    await db.query(
      'INSERT INTO users (nickname, password, birth, profile_image) VALUES (?, ?, ?, ?)',
      [nickname, password, birth, profile_image]
    );
    res.send('회원가입 완료');
  } catch (err) {
    res.status(500).send('회원가입 실패');
  }
});

module.exports = router;
