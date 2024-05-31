package com.example.TrabajoPractico8.services;

import com.example.TrabajoPractico8.entities.Categoria;
import com.example.TrabajoPractico8.repositories.BaseRepository;
import com.example.TrabajoPractico8.repositories.CategoriaRepository;
import org.springframework.stereotype.Service;

@Service
public class CategoriaServiceImpl extends BaseServiceImpl<Categoria,Long> implements CategoriaService {

    private CategoriaRepository categoriaRepository;

    public CategoriaServiceImpl(CategoriaRepository categoriaRepository) {
        super((BaseRepository<Categoria, Long>) categoriaRepository);
        this.categoriaRepository = categoriaRepository;
    }
}