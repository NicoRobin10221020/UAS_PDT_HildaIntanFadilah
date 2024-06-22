const santri = require("../models/santri");

// CRUD operations
exports.createsantri = async (req, res) => {
  const santri = new santri(req.body);
  try {
    await santri.save();
    res.status(201).send(santri);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getsantris = async (req, res) => {
  try {
    const santris = await santri.find({});
    res.status(200).send(santris);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getsantri = async (req, res) => {
  try {
    const santri = await santri.findById(req.params.id);
    if (!santri) {
      return res.status(404).send();
    }
    res.status(200).send(santri);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.updatesantri = async (req, res) => {
  try {
    const santri = await santri.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!santri) {
      return res.status(404).send();
    }
    res.status(200).send(santri);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.deletesantri = async (req, res) => {
  try {
    const santri = await santri.findByIdAndDelete(req.params.id);
    if (!santri) {
      return res.status(404).send();
    }
    res.status(200).send(santri);
  } catch (error) {
    res.status(500).send(error);
  }
};
