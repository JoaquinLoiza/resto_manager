import OrdertModel from "../models/Order.model";

export const getAll = async (req, res) => {
  try {
    const orders = await OrdertModel.find();
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export const getOrderByClient = async (req, res) => {
  try {
    const orders = await OrdertModel.find({
      clientId: req.params.clientId,
    });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export const getOrderById = async (req, res) => {
  try {
    const orders = await OrdertModel.findById(req.params.id);
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export const getOrderByDay = async (req, res) => {
  try {
    const orders = await OrdertModel.find({
      createdAt: req.params.createdAt,
    });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export const addOrder = async (req, res) => {
  try {
    const newOrder = new OrdertModel({
      clientId: req.body.clientId,
      menu: req.body.menu,
      notes: req.body.notes ? req.body.notes : "",
    });
    const orderSaved = await newOrder.save();
    res.json(orderSaved);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export const deleteOrder = async (req, res) => {
  try {
    const order = await OrdertModel.findByIdAndDelete(req.params.id);
    if (order == null) {
      res.status(404).json({ message: "Not found" });
    } else {
      res.json("the client was deleted");
    }
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export const updateOrder = async (req, res) => {
  try {
    const updatedOrder = await OrdertModel.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    res.json({ message: "Success update" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export const getAllNotDone = async (req, res) => {
  try {
    const orders = await OrdertModel.find({ done: false });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
