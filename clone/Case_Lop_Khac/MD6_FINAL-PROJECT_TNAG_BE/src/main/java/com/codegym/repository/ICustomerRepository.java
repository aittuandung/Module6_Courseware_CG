package com.codegym.repository;

import com.codegym.model.AppUser;
import com.codegym.model.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ICustomerRepository extends JpaRepository<Customer, Long> {
    Optional<Customer> findCustomerByAppUser_Id(Long id);
    Optional<Customer> findCustomerByAppUser (AppUser appUser);
}
