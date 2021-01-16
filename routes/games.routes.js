const router = require("express").Router();
const db = require("../database");
router.get("/", (req, res) => {
  db.query(`SELECT * FROM games`, (err, results) => {
    if (err) console.log(err);
    res.json(results);
  });
});

router.get("/:id", (req, res) => {
  console.log(req.params.id);
  res.json({ msg: "GET a game" });
});

router.post("/", (req, res) => {
  const game = {
    name: req.body.name,
    price: req.body.price,
    img: req.body.img,
  };
  db.query(`INSERT INTO games SET ?`, [game], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json({ msg: "add game" });
    }
  });
});

router.put("/:id", (req, res) => {
    const { id } = req.params;
  const { name, price, img } = req.body;
  db.query(`UPDATE games SET name ='${name}', price ='${price}', img='${img}' WHERE idgames=${id}`, (err, result)=>{
      if(err){
          console.log(err);
      }else{
          res.json({ msg: "update game" });
      }
  });
});

router.delete("/:id", (req, res) => {
    const { id } = req.params;
    db.query(`DELETE FROM games WHERE idgames=${id}`, (err, result)=>{
        if(err){
            console.log(err);
        }else{
            res.json({ msg: "delete game" });
        }
    });
});

module.exports = router;
