import ClientModel from "../models/Client.model";

export const getAll = async (req, res) => {
  try {
    const clients = await ClientModel.find();
    if(clients.length == 0) {
      res.json({ message: "there are no clients"});
    }
    res.json(clients);
  } catch (e) {
    res.status(500).json({ 
      message: "Server error",
      error: e
   });
  }
};

export const getById = async (req, res) => {
  try {
    const client = await ClientModel.findById(req.params.id);

    if(client == null) {
      res.status(404).json({ message: "the client does not exist" });
    }
    res.json(client);
  } catch (e) {
    res.status(500).json({ 
      message: "Server error",
      error: e
   });
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
  } catch (e) {
    res.status(500).json({ 
      message: "Server error",
      error: e
   });
  }
};

export const deleteClient = async (req, res) => {
  try {
    const client = await ClientModel.findByIdAndDelete(req.params.id);
    if (client == null) {
      res.status(404).json({ message: "the client does not exist" });
    }
    res.json("the client was deleted");
  } catch (e) {
    res.status(500).json({ 
      message: "Server error",
      error: e
   });
  }
};

export const updateClient = async (req, res) => {
  try {
    const updatedClient = await ClientModel.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    if (updatedClient == null) {
      res.status(404).json({ message: "the client does not exist" });
    }
    res.json({ message: "Success update" });
  } catch (e) {
    res.status(500).json({ 
      message: "Server error",
      error: e
   });
  }
};
