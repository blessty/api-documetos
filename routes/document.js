const express = require('express');

const router = express.Router();

const controller = require('../controllers/documentController');

router.post('/', controller.createDocument);
router.get('/', controller.listDocuments);
router.get('/:id', controller.getDocumentById);
router.put('/:id/estado', controller.updateDocumentState);
router.delete('/:id', controller.deleteDocument);

module.exports = router;
