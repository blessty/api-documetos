const Document = require('../models/document');

const createDocument = async (req, res, next) => {
  try {
    const { titulo } = req.body;

    if (!titulo) {
      return res.status(400).json({ error: 'Título requerido' });
    }

    const doc = await Document.create(titulo);

    res.status(201).json(doc);

  } catch (err) {
    next(err);
  }
};

const listDocuments = async (req, res, next) => {
  try {

    const docs = await Document.getAll();

    res.json(docs);

  } catch (err) {
    next(err);
  }
};

const getDocumentById = async (req, res, next) => {
  try {

    const doc = await Document.getById(req.params.id);

    if (!doc) {
      return res.status(404).json({ error: 'No encontrado' });
    }

    res.json(doc);

  } catch (err) {
    next(err);
  }
};

const updateDocumentState = async (req, res, next) => {
  try {

    const { estado } = req.body;

    const updated = await Document.updateState(
      req.params.id,
      estado
    );

    if (!updated) {
      return res.status(404).json({ error: 'No encontrado' });
    }

    res.json(updated);

  } catch (err) {
    next(err);
  }
};

const deleteDocument = async (req, res, next) => {
  try {

    const deleted = await Document.delete(req.params.id);

    if (!deleted) {
      return res.status(404).json({ error: 'No encontrado' });
    }

    res.status(204).send();

  } catch (err) {
    next(err);
  }
};

module.exports = {
  createDocument,
  listDocuments,
  getDocumentById,
  updateDocumentState,
  deleteDocument
};

