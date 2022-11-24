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
  try {
    const client = await ClientModel.findById(req.params.id);
    res.json(client);
  } catch (error) {
    res.status(404).json({ message: "Not found" });
  }
};

export const addClient = async (req, res) => {
  try {
    const newClient = new ClientModel({
      _id: req.body._id,
      name: req.body.name,
      lastname: req.body.lastname,
      email: req.body.email,
      password: req.body.password,
    });
    const clientSaved = await newClient.save();
    res.json(clientSaved);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export const deleteClient = async (req, res) => {
  try {
    const client = await ClientModel.findByIdAndDelete(req.params.id);
    if (client == null) {
      res.status(404).json({ message: "Not found" });
    } else {
      res.json("the client was deleted");
    }
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export const updateClient = async (req, res) => {
  try {
    const updatedClient = await ClientModel.findByIdAndUpdate(
      req.params.id,
      req.body
    );
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
