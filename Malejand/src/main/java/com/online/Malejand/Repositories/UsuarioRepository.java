package com.online.Malejand.Repositories;

import java.util.ArrayList;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.online.Malejand.Models.UserModel;

@Repository

public interface UsuarioRepository extends CrudRepository<UserModel,Long> {
    public abstract ArrayList<UserModel> findByCedula(Long cedula);

    public abstract ArrayList<UserModel> findByEmail(String email);
    
}
