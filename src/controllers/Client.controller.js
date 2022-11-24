import ClientModel from "../models/Client.model";

export const getAll = async (req, res) => {
  try {
    const clients = await ClientModel.find();
    res.json(clients);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export const getById = async (req, res) => {
  const client = await ClientModel.findById(req.params.id);
  res.json(client);
};

export const addClient = async (req, res) => {
  const newClient = new ClientModel({
    _id: req.body._id,
    name: req.body.name,
    lastname: req.body.lastname,
    email: req.body.email,
  });
  const clientSaved = await newClient.save();
  res.json(clientSaved);
};

export const deleteClient = async (req, res) => {
  await ClientModel.findByIdAndDelete(req.params.id);
  res.json("the client was deleted");
};

export const updateClient = async (req, res) => {
  const updatedClient = await ClientModel.findByIdAndUpdate(
    req.params.id,
    req.body
  );
  res.json({ message: "client was updated success" });
};
