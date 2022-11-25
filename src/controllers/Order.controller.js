import OrdertModel from "../models/Order.model";

export const getAll = async (req, res) => {
  try {
    const orders = await OrdertModel.find();
    if(orders.length == 0) {
      res.json({ message: "there are no orders"});
    }
    res.json(orders);
  } catch (e) {
    res.status(500).json({ 
      message: "Server error",
      error: e
   });
  }
};

export const getOrderByClient = async (req, res) => {
  try {
    const orders = await OrdertModel.find({
      clientId: req.params.clientId,
    });
    if(orders.length = 0) {
      res.json({ message: "there are no orders for the client"});
    }
    res.json(orders);
  } catch (e) {
    res.status(500).json({ 
      message: "Server error",
      error: e
   });
  }
};

export const getOrderById = async (req, res) => {
  try {
    const order = await OrdertModel.findById(req.params.id);
    if(order == null) {
      res.status(404).json({ message: "the order does not exist"});
    }
    res.json(order);
  } catch (e) {
    res.status(500).json({ 
      message: "Server error",
      error: e
   });
  }
};

/*
export const getOrderByDay = async (req, res) => {
  try {
    const orders = await OrdertModel.find({
      createdAt: req.params.createdAt,
    });
    res.json(orders);
  } catch (e) {
    res.status(500).json({ 
      message: "Server error",
      error: e
   });
  }
};
*/

export const addOrder = async (req, res) => {
  try {
    const newOrder = new OrdertModel({
      clientId: req.body.clientId,
      menu: req.body.menu,
      notes: req.body.notes ? req.body.notes : "",
    });
    const orderSaved = await newOrder.save();
    res.json(orderSaved);
  } catch (e) {
    res.status(500).json({ 
      message: "Server error",
      error: e
   });
  }
};

export const deleteOrder = async (req, res) => {
  try {
    const order = await OrdertModel.findByIdAndDelete(req.params.id);
    if (order == null) {
      res.status(404).json({ message: "the order does not exist" });
    }
    res.json("the order was deleted");
  } catch (e) {
    res.status(500).json({ 
      message: "Server error",
      error: e
   });
  }
};

export const updateOrder = async (req, res) => {
  try {
    const updatedOrder = await OrdertModel.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    if(updateOrder == null) {
      res.status(404).json({ message: "the order does not exist" });
    }
    res.json({ message: "Success update" });
  } catch (e) {
    res.status(500).json({ 
      message: "Server error",
      error: e
   });
  }
};

export const getAllNotDone = async (req, res) => {
  try {
    const orders = await OrdertModel.find({ done: false });
    if(orders.length == 0){
      res.json({ message: "there are no orders to be made"});
    }
    res.json(orders);
  } catch (e) {
    res.status(500).json({ 
      message: "Server error",
      error: e
   });
  }
};
