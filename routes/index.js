var express = require("express");
var router = express.Router();

const messages = [
	{
		text: "ტრაკი მტკივა და რა გავაკეთო?!",
		user: "Amando",
		added: new Date(),
	},
	{
		text: "გითხარი ჯოხებით ბევრი არ ითამაშოო და არ დამიჯერე ეხლა შედეგები მოგაწვა",
		user: "Charles",
		added: new Date(),
	},
];

/* GET home page. */
router.get("/", function (req, res, next) {
	res.render("index", {title: "Express", messages: messages});
});

router.get("/new", function (req, res, next) {
	res.render("form", {title: "Express", messages: messages});
});

router.post("/new", function (req, res) {
	messages.push({
		text: req.body.messageText,
		user: req.body.messageAuthor,
		added: new Date(),
	});
	res.redirect("/");
});

module.exports = router;
