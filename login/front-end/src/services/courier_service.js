import { myaxios } from "./helper";

export const addingcouriers = (courier) => {
  return myaxios
    .post("/courier11/add", courier)
    .then((response) => response.data);
};

export const updatecouriers = (courier_id, courier) => {
  return myaxios
    .post(`/courier11/update/${courier_id}`, courier)
    .then((response) => response.data);
};

export const viewingcourier = (courier_id) => {
  return myaxios
    .get(`/courier11/get?courier_id=${courier_id}`)
    .then((response) => response.data);
};

export const deletingcourier = (courier_id) => {
  return myaxios
    .delete(`/courier11/delete/${courier_id}`)
    .then((response) => response.data);
};
