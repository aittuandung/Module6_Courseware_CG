package com.codegym.controller;

import com.codegym.model.OrderStatus;
import com.codegym.service.IOrderStatusService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("*")
@RequestMapping("/orderstatus")
public class OrderStatusController {
    @Autowired
    IOrderStatusService orderStatusService;

    @GetMapping
    public ResponseEntity<?> getListStatus() {
        Iterable<OrderStatus> orderDetails = orderStatusService.findAll();
        return new ResponseEntity<>(orderDetails, HttpStatus.OK);
    }
}
