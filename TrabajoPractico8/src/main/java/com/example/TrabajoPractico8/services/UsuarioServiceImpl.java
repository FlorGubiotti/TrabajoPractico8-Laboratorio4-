package com.example.TrabajoPractico8.services;

import com.example.TrabajoPractico8.entities.Usuario;
import com.example.TrabajoPractico8.repositories.BaseRepository;
import com.example.TrabajoPractico8.repositories.UsuarioRepository;
import org.springframework.stereotype.Service;

@Service
public class UsuarioServiceImpl extends BaseServiceImpl<Usuario, Long> implements UsuarioService {

    private UsuarioRepository usuarioRepository;

    public UsuarioServiceImpl(UsuarioRepository usuarioRepository) {
        super((BaseRepository<Usuario, Long>) usuarioRepository);
        this.usuarioRepository = usuarioRepository;
    }


}
