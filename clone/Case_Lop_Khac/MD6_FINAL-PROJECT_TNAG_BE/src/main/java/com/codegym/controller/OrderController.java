package com.codegym.controller;

import com.codegym.dto.request.CartDetailDto;
import com.codegym.model.*;
import com.codegym.security.userpincal.UserDetailService;
import com.codegym.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.Optional;

@RestController
@CrossOrigin("*")
@RequestMapping("/orders")
public class OrderController {
    @Autowired
    IMerchantService merchantService;
    @Autowired
    UserDetailService userDetailsService;
    @Autowired
    IOrderService orderService;
    @Autowired
    ICustomerService customerService;
    @Autowired
    UserDetailService userDetailService;
    @Autowired
    IOrderDetailService orderDetailService;
    @Autowired
    IFoodService foodService;
    @Autowired
    IOrderStatusService orderStatusService;
    @Autowired
    ICartDetailService cartDetailService;
    @Autowired
    ICartService cartService;

    @GetMapping("/customer-search/{search}")
    public ResponseEntity<?> getListOrderbyCustomerSearch(@PathVariable String search) {
        AppUser appUser = userDetailsService.getCurrentUser();
        Optional<Customer> customerOptional = customerService.findCustomerByAppUser(appUser);
        if (!customerOptional.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        Customer customer = customerOptional.get();
        Iterable<Order> orders = orderService.getListOrderbyCustomerSearch("%" + search + "%", customer.getId());
        return new ResponseEntity<>(orders, HttpStatus.OK);
    }


    @GetMapping("/search-all/{search}")
    public ResponseEntity<?> listOrderBySearch(@PathVariable String search) {
        AppUser appUser = userDetailsService.getCurrentUser();
        Optional<Merchant> merchantOptional = merchantService.findMerchantByAppUser(appUser);
        if (!merchantOptional.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        Merchant merchant = merchantOptional.get();
        Iterable<Order> orders = orderService.merchantSearch("%" + search + "%", merchant.getId());
        return new ResponseEntity<>(orders, HttpStatus.OK);
    }

    @GetMapping("/search-accepted/{search}")
    public ResponseEntity<?> listOrderAcceptedBySearch(@PathVariable String search) {
        AppUser appUser = userDetailsService.getCurrentUser();
        Optional<Merchant> merchantOptional = merchantService.findMerchantByAppUser(appUser);
        if (!merchantOptional.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        Merchant merchant = merchantOptional.get();
        Iterable<Order> orders = orderService.merchantSearchAccepted("%" + search + "%", merchant.getId());
        return new ResponseEntity<>(orders, HttpStatus.OK);
    }
    @GetMapping("/search-denied/{search}")
    public ResponseEntity<?> listOrderDeniedBySearch(@PathVariable String search) {
        AppUser appUser = userDetailsService.getCurrentUser();
        Optional<Merchant> merchantOptional = merchantService.findMerchantByAppUser(appUser);
        if (!merchantOptional.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        Merchant merchant = merchantOptional.get();
        Iterable<Order> orders = orderService.merchantSearchDenied("%" + search + "%", merchant.getId());
        return new ResponseEntity<>(orders, HttpStatus.OK);
    }
    @GetMapping("/search-wait/{search}")
    public ResponseEntity<?> listOrderWaitBySearch(@PathVariable String search) {
        AppUser appUser = userDetailsService.getCurrentUser();
        Optional<Merchant> merchantOptional = merchantService.findMerchantByAppUser(appUser);
        if (!merchantOptional.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        Merchant merchant = merchantOptional.get();
        Iterable<Order> orders = orderService.merchantSearchWait("%" + search + "%", merchant.getId());
        return new ResponseEntity<>(orders, HttpStatus.OK);
    }
    @GetMapping("/{id}")
    public ResponseEntity<?> detailOrder(@PathVariable Long id) {
        Optional<Order> order = orderService.findById(id);
        if (!order.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(order, HttpStatus.OK);
    }

    @GetMapping("/status/{statusId}")
    public ResponseEntity<?> getOrderByStatus (@PathVariable Long statusId) {
        AppUser appUser = userDetailsService.getCurrentUser();
        Optional<Merchant> merchantOptional = merchantService.findMerchantByAppUser(appUser);
        if (!merchantOptional.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        Merchant merchant = merchantOptional.get();
        Optional<OrderStatus> orderStatusOptional = orderStatusService.findById(statusId);
        if (!orderStatusOptional.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        OrderStatus orderStatus = orderStatusOptional.get();
        Iterable<Order> orders = orderService.findAllByOrderStatusAndMerchant(orderStatus,merchant);
        return new ResponseEntity<>(orders, HttpStatus.OK);
    }

    @GetMapping("/merchant-order")
    ResponseEntity<?> findAllOrderOfMerchant() {
        AppUser appUser = userDetailsService.getCurrentUser();
        Optional<Merchant> merchantOptional = merchantService.findMerchantByAppUser(appUser);
        if (!merchantOptional.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        Merchant merchant = merchantOptional.get();
        Iterable<Order> ordersOfMerchant = orderService.findAllByMerchant(merchant);
        return new ResponseEntity<>(ordersOfMerchant, HttpStatus.OK);
    }

    @GetMapping("/customer-order")
    ResponseEntity<?> findAllOrderOfCustomer() {
        AppUser appUser = userDetailsService.getCurrentUser();
        Optional<Customer> customerOptional = customerService.findCustomerByAppUser(appUser);
        if (!customerOptional.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        Customer customer = customerOptional.get();
        Iterable<Order> ordersOfCustomer = orderService.findAllByCustomer(customer);
        return new ResponseEntity<>(ordersOfCustomer, HttpStatus.OK);
    }

    @PutMapping("/{orderId}/accept")
    ResponseEntity<?> merchantAcceptOrder(@PathVariable Long orderId) {
        AppUser appUser = userDetailsService.getCurrentUser();
        Optional<Merchant> merchantOptional = merchantService.findMerchantByAppUser(appUser);
        if (!merchantOptional.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        Merchant merchant = merchantOptional.get();
        Optional<Order> orderOptional = orderService.findById(orderId);
        if (!orderOptional.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        Order order = orderOptional.get();
        if (order.getMerchant() != merchant) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        order.setOrderStatus(orderStatusService.findByNameOrderStatus("Đã tiếp nhận").get());
        Iterable<OrderDetails> orderDetailsList = orderDetailService.findAllByOrder(order);
        for (OrderDetails orderDetails : orderDetailsList) {
            Food food = orderDetails.getFood();
            food.setSold((long) (food.getSold() + orderDetails.getQuantity()));
            foodService.save(food);
        }
        order = orderService.save(order);
        return new ResponseEntity<>(order, HttpStatus.OK);
    }

    @PutMapping("/{orderId}/deny")
    ResponseEntity<?> merchantDenyOrder(@PathVariable Long orderId) {
        AppUser appUser = userDetailsService.getCurrentUser();
        Optional<Merchant> merchantOptional = merchantService.findMerchantByAppUser(appUser);
        if (!merchantOptional.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        Merchant merchant = merchantOptional.get();
        Optional<Order> orderOptional = orderService.findById(orderId);
        if (!orderOptional.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        Order order = orderOptional.get();
        if (order.getMerchant() != merchant) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        order.setOrderStatus(orderStatusService.findByNameOrderStatus("Người bán hủy đơn hàng").get());
        return new ResponseEntity<>(orderService.save(order), HttpStatus.OK);
    }

    @PostMapping("/createOrder/{merchantId}")
    ResponseEntity<?> createOrder(@PathVariable Long merchantId, @RequestBody CartDetailDto cartDetailDto) {
        AppUser appUser = userDetailsService.getCurrentUser();
        Optional<Customer> customerOptional = customerService.findCustomerByAppUser(appUser);
        if (!customerOptional.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        Customer customer = customerOptional.get();
        Merchant merchant = merchantService.findById(merchantId).get();
        Iterable<CartDetail> cartDetails = cartDetailDto.getCartDetails();
        double totalOrderPrice = 0;
        Order order = new Order();
        order.setOrderStatus(orderStatusService.findByNameOrderStatus("Đang chờ tiếp nhận").get());
        order.setCreateAt(new Date());
        order.setCustomer(customer);
        order.setMerchant(merchant);
        orderService.save(order);
        for (CartDetail cartDetail: cartDetails) {
            totalOrderPrice += cartDetail.getTotalPrice();
            OrderDetails orderDetails = new OrderDetails();
            orderDetails.setOrder(order);
            orderDetails.setFood(cartDetail.getFood());
            orderDetails.setQuantity(cartDetail.getQuantity());
            orderDetails.setPrice(cartDetail.getTotalPrice());
            orderDetailService.save(orderDetails);
            cartDetailService.remove(cartDetail.getId());
        }
        order.setPriceTotal(totalOrderPrice);
        orderService.save(order);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping("/deleteOrderDetail/{cartId}/{merchantId}")
    ResponseEntity<?> deleteOrderDetail(@PathVariable Long cartId, @PathVariable Long merchantId){
        Cart cart = cartService.findById(cartId).get();
        Merchant merchant = merchantService.findById(merchantId).get();
        cartDetailService.deleteCartDetailByCartAndMerchant(cart,merchant);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}